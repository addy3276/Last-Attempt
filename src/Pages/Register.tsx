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
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import { auth } from "../../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

 import { useNavigate } from 'react-router-dom';
 import { useState } from 'react';


export function Register(props: PaperProps) {
  const [type] = useToggle(['register']);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {   
      email: '',
      password: '',
      terms: true,
    },


    validate: {
        email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),    
        password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });
  const navigate =useNavigate();

  const Register = () =>{
    setLoading(true)

      createUserWithEmailAndPassword(auth,form.values.email, form.values.password)
     .then((auth) => {
        if(auth)
        form.reset();
        navigate('/registered');
      }) 
    .catch((error:any) => {
        if (error.message.includes("auth/email-already-in-use")) {
          form.setFieldError("email", "Email Already Registered");
        } else {
            error.message.include("Authentication error:", error);
        }
      })
      .finally(()=>{
        setLoading(false)
      })

 };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundColor:"	#D3D3D3"}}>
    <Paper  radius="md" p="xl" withBorder  {...props}>
      <Text size="lg" fw={500}>
        Welcome to Adil's Page, {type} with
      </Text>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />
   
      <form onSubmit={form.onSubmit(vals => {Register()})}>
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
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
        </Stack>

        <Group justify="end" mt="xl">
           <Anchor component="button" type="button" c="dimmed"  size="xs">
            Don't have an account? Register
          </Anchor> 
          <Button type="submit" radius="xl">
            {loading?'loading...': upperFirst(type)}
      
          </Button>
        </Group>
     
      </form>
    </Paper>
    </div>
  );
}
export default Register;