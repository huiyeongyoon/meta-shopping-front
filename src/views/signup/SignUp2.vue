<template>
  <div>
    <br />
    <h1 class="tag_style">메타 쇼핑 회원가입 페이지 입니다.</h1>
    <br />
    <br />
    <b-form-group label-align-sm="center" label-cols="2" label="이름" label-for="name" content-cols-lg="1">
      <b-form-input id="name" v-model="user.name" style="width: 130px"></b-form-input>
    </b-form-group>

    <b-form-group label-align-sm="center" label-cols="2" label="아이디" label-for="userid" content-cols-lg="2">
      <b-input-group style="width: 200px">
        <b-form-input placeholder="이름 검색"></b-form-input>
        <b-input-group-append>
          <b-button variant="primary" size="sm" @click="s">중복확인</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
    <b-form-group label-align-sm="center" label-cols="2" label="비밀번호 확인" label-for="userid" content-cols-lg="2">
      <b-input-group style="width: 200px">
        <b-form-input placeholder="이름 검색"></b-form-input>
        <b-input-group-append>
          <b-button variant="primary" size="sm" @click="s">비번확인</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>

    <b-form-group label-align-sm="center" label-cols="1" label="사용자권한" label-for="role" content-cols-lg="1">
      <b-form-radio-group v-model="user.role" :options="userRole.options"></b-form-radio-group>
    </b-form-group>
    <b-form-group label-align-sm="center" label-cols="1" label="이메일" label-for="email" content-cols-lg="1">
      <b-form-input id="email" v-model="user.email"></b-form-input>
    </b-form-group>
    <b-form-group label-align-sm="center" label-cols="1" label="전화번호" label-for="phone" content-cols-lg="1">
      <b-form-input id="phone" v-model="user.phone"></b-form-input>
    </b-form-group>
    <b-form-group v-if="inputMode === 'update'" label-cols="3" label="등록일시" label-for="createdAt">
      <b-form-input id="createdAt" v-model="user.createdAt" disabled></b-form-input>
    </b-form-group>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: null,
        name: null,
        userid: null,
        password: null,
        role: null,
        email: null,
        phone: null,
        updatedPwDate: null,
        createdAt: null
      },
      userRole: {
        default: 'buyer', // 기본값
        options: [
          { value: 'buyer', text: '구매자' },
          { value: 'seller', text: '판매자' },
          { value: 'admin', text: '관리자' }
        ]
      }
    }
  }
}
</script>

<style scoped>
/* #footer {
  position: fixed;
  bottom: 0;
} */
.input_style {
  text-align: center;
}
.tag_style {
  text-align: center;
}
</style>
