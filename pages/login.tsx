import axios from 'axios';
import jsCookie from 'js-cookie';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EnteringBox from '../components/entering/EnteringBox';
import { IUser, IUserInfoRootState } from '../lib/types/user';
import { userInfoActions } from '../store/user-slice';
import { getError } from '../utilities/error';
const Login: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const userInfo = useSelector((state: IUserInfoRootState) => {
    return state.userInfo.userInformation;
  });
  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  }, [userInfo, router]);
  async function LoginHandler(user: IUser) {
    const { email, password } = user;
    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      });
      console.log(getError(data));
      dispatch(userInfoActions.userLogin(data));
      jsCookie.set('userInfo', JSON.stringify(data));
      router.push('/');
    } catch (err: any) {
      setErrorMessage(getError(err));
      console.log(getError(err));
    }
  }
  return <EnteringBox title="login" submitHandler={LoginHandler} errorMessage={errorMessage} />;
};

export default Login;
