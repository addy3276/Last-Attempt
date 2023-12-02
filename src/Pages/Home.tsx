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
import firebase from 'firebase/app';
import 'firebase/auth';
// import { getAuth} from "firebase/auth";
// import { app } from "../../config/firebase"

export function Home(props: PaperProps) {
  // const auth = getAuth(app);
  
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      // username:'',
      // firstName:'',
      // lastName:'',
      email: '',
      // name: '',
      password: '',
      // phone:'',
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
        await firebase.auth().signInWithEmailAndPassword(form.values.email, form.values.password);
      } else {
        await firebase.auth().createUserWithEmailAndPassword(form.values.email, form.values.password);
      }
     
      console.log('Authentication successful');
    } catch (error) {
     
      console.error('Authentication error:', error);
    }
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundColor:"	#D3D3D3"}}>
    <Paper  radius="md" p="xl" withBorder  {...props}>
      <Text size="lg" fw={500}>
        Welcome to Mantine, {type} with
      </Text>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />
      {/* <form onSubmit={form.onSubmit(() => {})}> */}
      {/* <form onSubmit={form.onSubmit(()=>{})}> */}
      <form onSubmit={(e) => { e.preventDefault(); handleAuthentication(); }}>
        <Stack>
          {/* {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              radius="md"
            />
            )} */}
                {/* {type === 'register' && (
            <TextInput
              label="Username"
              placeholder="Username"
              value={form.values.username}
              onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
              radius="md"
            />
            )} */}
             {/* {type === 'register' && (
            <TextInput
              label="First Name"
              placeholder="First Name"
              value={form.values.firstName}
              onChange={(event) => form.setFieldValue('firstName', event.currentTarget.value)}
              radius="md"
            />
            )} */}
             {/* {type === 'register' && (
            <TextInput
              label="Last Name"
              placeholder="Last Name"
              value={form.values.lastName}
              onChange={(event) => form.setFieldValue('lastName', event.currentTarget.value)}
              radius="md"
            />
            )}   */}
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
           {/* {type === 'register' && (
            <TextInput
              label="Phone No"
              placeholder="Phone No"
              value={form.values.phone}
              onChange={(event) => form.setFieldValue('phone', event.currentTarget.value)}
              radius="md"
            />
            )}   */}

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