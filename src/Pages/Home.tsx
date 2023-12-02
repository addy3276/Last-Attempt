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
import { signInWithEmailAndPassword , createUserWithEmailAndPassword} from "firebase/auth";
 import { useState } from "react";

export function Home(props: PaperProps) {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const [LoginSuccess, setLoginSuccess] = useState(false);


  const [type, toggle] = useToggle(['login', 'register']);
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

  const handleAuthentication = async () => {
    try {
      if (type === 'login') {
        await signInWithEmailAndPassword(auth,form.values.email, form.values.password);
        setLoginSuccess(true);
        form.setValues({
          email: '',
          password: '',
           terms: true,
        })

      } else {
        await createUserWithEmailAndPassword(auth,form.values.email, form.values.password);
       setRegistrationSuccess(true); 
        form.setValues({
          email: '',
          password: '',
           terms: true,
        })
    }
     
      console.log('Authentication successful');
    } catch (error) {
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
        
        alert('Invalid credentials. Please check your email and password.');
      } else {
       
        alert(error.message);
      }
   
    }
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundColor:"	#D3D3D3"}}>
    <Paper  radius="md" p="xl" withBorder  {...props}>
      <Text size="lg" fw={500}>
        Welcome to Mantine, {type} with
      </Text>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />
   
      <form onSubmit={(e) => { e.preventDefault(); handleAuthentication(); }}>
        <Stack>

        {LoginSuccess && (
            <Text size="lg" fw={500} >
            Login Succesfull
        </Text>
           )}
           {registrationSuccess && (
            <Text size="lg" fw={500} >
            Registration Succesfull
        </Text>
           )}
   
          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />
          

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
      
          </Button>
        </Group>
     
      </form>
    </Paper>
    </div>
  );
}
export default Home;