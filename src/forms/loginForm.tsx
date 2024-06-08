import { Formik } from "formik";
import { Button, Text, TextInput, View } from "react-native";
import { object, string } from "yup";

interface ILoginFormProps {}
export const LoginForm = ({}: ILoginFormProps) => {
  const validationSchema = object({
    account: string().required("Compte requis"),
    password: string().required("Mot de passe requis"),
  });

  return (
    <View>
      <Formik
        initialValues={{
          account: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, action) => {
          console.log(values);
          action.resetForm();
        }}
      >
        {(form) => (
          <View>
            {/* Account */}
            <View>
              <Text>Compte</Text>
              <TextInput
                className="border"
                placeholder="Compte"
                onChangeText={form.handleChange("account")}
                value={form.values.account}
                onBlur={form.handleBlur("account")}
              />
              <Text>{form.touched.account && form.errors.account}</Text>
            </View>

            {/* Password */}
            <View>
              <Text>Mot de passe</Text>
              <TextInput
                className="border"
                placeholder="Mot de passe"
                textContentType="password"
                onChangeText={form.handleChange("password")}
                value={form.values.password}
                onBlur={form.handleBlur("password")}
              />
              <Text>{form.touched.password && form.errors.password}</Text>
            </View>

            <Button
              title="Se connecter"
              disabled={!!form.errors.account || !!form.errors.password}
              onPress={() => form.handleSubmit()}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
