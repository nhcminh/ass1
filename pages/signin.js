export default {
  template: `
  <v-container>
    <v-card>
      <v-card-title class="text-center">Sign Up</v-card-title>
      <v-card-text>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            ></v-text-field>
            <p>Don't have an account? <router-link to="/sign-up">Sign up here</router-link></p>
            <p><router-link to="/sign-up">Forgot your password?</router-link></p>
            <v-btn
            color="primary"
            class="mr-4"
            @click="signin"
            >
            Sign In
            </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
  `,
  data: () => ({
    valid: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
  }),

  methods: {
    signin() {
        debugger
      let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
      const idx = accounts.findIndex((acc) => acc.email === this.email);
      const account = idx > -1 ? accounts[idx] : null;
      if (account && account.password === this.password) {
        localStorage.setItem("token", true);
        this.$router.push("/home");
      }
    },
  },
};