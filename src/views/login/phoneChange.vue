<template>
  <div>
    <b-modal
      id="phonechange-inform"
      :title="title"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
      @ok="submit()"
    >
      <div>
        <b-form-group label-cols="3" label="전화번호" label-for="phone">
          <b-input-group>
            <b-form-select
              id="phone1"
              v-model="user.userPhone1"
              style="width: 70px"
              :options="userPhone1.options"
            ></b-form-select>
            <p style="width: 50px; text-align: center; font-size: 40px">-</p>
            <b-input-group-append>
              <b-input
                id="phone2"
                v-model="user.userPhone2"
                style="width: 70px"
                maxlength="4"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              ></b-input>
              <p style="width: 50px; text-align: center; font-size: 40px">-</p>
              <b-input
                id="phone3"
                v-model="user.userPhone3"
                style="width: 70px"
                maxlength="4"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              ></b-input>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </div>
    </b-modal>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
export default {
  data() {
    return {
      title: '전화번호 변경',
      headerBgVariant: 'info',
      headerTextVariant: 'white',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'info',
      footerTextVariant: 'dark',
      pwd: null,
      user: jwtDecode(localStorage.getItem('token')),
      userPhone1: {
        options: [
          { value: '010', text: '010' },
          { value: '011', text: '011' },
          { value: '02', text: '02' },
          { value: '031', text: '031' },
          { value: '032', text: '032' },
          { value: '033', text: '033' },
          { value: '041', text: '041' },
          { value: '042', text: '042' },
          { value: '043', text: '043' },
          { value: '044', text: '044' },
          { value: '051', text: '051' },
          { value: '052', text: '052' },
          { value: '053', text: '053' },
          { value: '054', text: '054' },
          { value: '055', text: '055' },
          { value: '061', text: '061' },
          { value: '062', text: '062' },
          { value: '063', text: '063' },
          { value: '064', text: '064' }
        ]
      },
      userPhone2: null,
      userPhone3: null
    }
  },
  methods: {
    submit() {
      setTimeout(() => {
        this.$store.dispatch('actUserUpdate', this.user, true)
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped></style>
