<template>
  <div class="flex items-center">
    <div class="w-[680px] h-[100vh]">
      <Carousel autoplay="ture">
        <img src="../../public/images/1.png" alt="" />
        <img src="../../public/images/2.png" alt="" />
        <img src="../../public/images/3.png" alt="" />
      </Carousel>
    </div>
    <div class="flex-1 h-[100vh] flex justify-center items-center">
      <div class="w-[500px] flex flex-col justify-center items-center">
        <h1 class="text-[35px] mb-[60px]">登录，即刻创造您的应用</h1>
        <Space class="w-full" direction="vertical">
          <Input
            class="h-[60px]"
            size="large"
            v-model:value="userLoginInfo.username"
            placeholder="账号"
          />
          <Input
            class="h-[60px]"
            size="large"
            v-model:value.lazy="userLoginInfo.password"
            autofocus
            placeholder="密码"
          />
        </Space>
        <div class="w-full my-[10px]">
          <Radio v-model:checked="checked"
            >我已阅读并同意<Button type="link">《服务协议》</Button>和<Button
              type="link"
              >《隐私政策》</Button
            ></Radio
          >
        </div>
        <Button @click="loginHandle" class="w-full mt-[30px]" type="primary"
          >登录</Button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Button, Carousel, Space, Input, Radio } from "ant-design-vue";
import { getAccessToken } from "@/service/api";

const userLoginInfo = ref({
  username: "780934133@qq.com",
  password: "hanser.520",
});
const loginHandle = async () => {
  const loginData = {
    grant_type: "password",
    username: userLoginInfo.value.username,
    password: userLoginInfo.value.password,
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
    scope: import.meta.env.VITE_CLIENT_SCOPE,
  };
  const [err, res] = await to(getAccessToken(loginData));
  console.log();
};
</script>
