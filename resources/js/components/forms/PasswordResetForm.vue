<template>
  <!--Password-->
  <div class="form-row">
    <div class="form-group col">
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        v-validate="'required|min:6|max:20'"
        :class="{
                        'form-control': true,
                        'is-invalid': errors.has('password')
                    }"
        v-model="formData.password"
        maxlength="20"
        ref="password"
      />
      <div class="invalid-feedback">{{ errors.first("password") }}</div>
    </div>
    <div class="form-group col">
      <label for="password_confirmation">Password Confirmation</label>
      <input
        type="password"
        name="password_confirmation"
        v-validate="'required|confirmed:password'"
        :class="{
                        'form-control': true,
                        'is-invalid': errors.has('password_confirmation')
                    }"
        v-model="formData.password_confirmation"
        maxlength="20"
      />
      <div class="invalid-feedback">{{ errors.first("password_confirmation") }}</div>
    </div>

    <button type="submit" class="btn btn-primary" :disabled="errors.any()">Submit</button>
  </div>
</template>

<script>
export default {
  props: ["formData"],
  inject: ["$validator"]
};
</script>