import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Stack,
  Anchor,

} from '@mantine/core';
import { auth } from "../../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";

 import { useNavigate } from 'react-router-dom';
 import { useState } from 'react';
 import { Link } from 'react-router-dom';
 

export function Home(props: PaperProps) {
  const [type] = useToggle(['login']);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {   
      email: '',
      password: '',
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),    
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });
  const navigate = useNavigate();
  const login =  () =>{
     setLoading(true)
     signInWithEmailAndPassword(auth,form.values.email, form.values.password)
     .then((auth) => {
      if(auth)
      form.reset();
      navigate('/dashboard');
    }) 
    .catch((error:any) => {
      if (error.message.includes("auth/invalid-email")) {
        form.setFieldError("email", "Invalid email");
      } else {
        (error.message.includes("auth/wrong-password")) 
          form.setFieldError("password", "Incorrect password");
      }
    })
    .finally(()=>{
      setLoading(false);
    })
  };
 
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundColor:"	#D3D3D3"}}>
    <Paper  radius="md" p="xl" withBorder  {...props}>
      <Text size="lg" fw={500}>
        Welcome to Adil's Page, {type} with
      </Text>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />
   
      <form onSubmit={form.onSubmit(vals => {login()})}>
      
        <Stack>
          <TextInput
            label="Email"
            placeholder="hello@mantine.dev"
            {...form.getInputProps('email')}           
            radius="md"
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            {...form.getInputProps('password')}
            radius="md"
          />
        </Stack>

        <Group justify="end" mt="xl">
        <Anchor component={Link} to={'/registration'} type="button" c="dimmed"  size="xs">
            Don't have an account? Register
          </Anchor> 
          <Button type="submit" radius="xl">
            {loading ? 'Loading...' :upperFirst(type)}
      
          </Button>
        </Group>
     
      </form>
    </Paper>
    </div>
  );
}
export default Home;