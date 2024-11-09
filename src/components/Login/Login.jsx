// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLogin } from '../../contexts/LoginContext';
// import { Button, Checkbox, Form, Input } from 'antd';
// import { getDatas } from '../../utils/fetch';

// const Login = () => {
//    const navigate = useNavigate();
//    const { login } = useLogin();
//    const [error, setError] = useState('');

 
//    const handleLogin = async (values) => {
//       const { username, password } = values
//       try {
//          const response = await getDatas('users'); 
//          const user = response.users.find(user => user.username === username && user.password === password)

//          if (user) {
//             login();
//             navigate('/'); 
//          } else {
//             setError('Invalid username or password');
//          }
//       } catch (error) {
//          setError('Failed to login');
//       }
//    };

//    return (
//       <div className="flex items-center justify-center h-svh ">
//          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
//             <h2 className="text-center text-2xl font-bold mb-6">Login</h2>

//             {error && <div className="text-red-500 text-center mb-4">{error}</div>}

//             <Form
//                name="basic"
//                onFinish={handleLogin} 
//                initialValues={{
//                   remember: true,
//                }}
//                autoComplete="off"
//             >
//                <Form.Item
//                   label="Username"
//                   name="username"
//                   rules={[
//                      {
//                         required: true,
//                         message: 'Please input your username!',
//                      },
//                   ]}
//                >
//                   <Input />
//                </Form.Item>

//                <Form.Item
//                   label="Password"
//                   name="password"
//                   rules={[
//                      {
//                         required: true,
//                         message: 'Please input your password!',
//                      },
//                   ]}
//                >
//                   <Input.Password />
//                </Form.Item>

//                <Form.Item>
//                   <Button type="primary" htmlType="submit" block>
//                      Login
//                   </Button>
//                </Form.Item>
//             </Form>
//          </div>
//       </div>
//    );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../contexts/LoginContext';
import { Button, Form, Input } from 'antd';
import { getDatas } from '../../utils/fetch';

const Login = () => {
   const navigate = useNavigate();
   const { login } = useLogin();
   const [error, setError] = useState('');

   const handleLogin = async (values) => {
      const { username, password } = values;
      try {
         const response = await getDatas('users');
         const user = response.users.find(
            (user) => user.username === username && user.password === password
         );

         if (user) {
            login(user); // Memanggil login dengan user
            navigate('/');
         } else {
            setError('Invalid username or password');
         }
      } catch (error) {
         setError('Failed to login');
      }
   };

   return (
      <div className="flex items-center justify-center h-screen">
         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
            <h2 className="text-center text-2xl font-bold mb-6">Login</h2>

            {error && <div className="text-red-500 text-center mb-4">{error}</div>}

            <Form
               name="basic"
               onFinish={handleLogin}
               initialValues={{
                  remember: true,
               }}
               autoComplete="off"
            >
               <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                     {
                        required: true,
                        message: 'Please input your username!',
                     },
                  ]}
               >
                  <Input />
               </Form.Item>

               <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                     {
                        required: true,
                        message: 'Please input your password!',
                     },
                  ]}
               >
                  <Input.Password />
               </Form.Item>

               <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                     Login
                  </Button>
               </Form.Item>
            </Form>
         </div>
      </div>
   );
};

export default Login;
