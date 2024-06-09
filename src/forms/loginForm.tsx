import { Formik, FormikHelpers } from "formik";
import { Button, Text, TextInput, View } from "react-native";
import { useMutationLogin } from "@queries/index";
import { object, string } from "yup";
import { useEffect } from "react";

interface ILoginFormProps {
  navigation: any;
}
export const LoginForm = ({ navigation }: ILoginFormProps) => {
  const {
    mutate: login,
    isPending: loadingLogin,
    isSuccess: loginSuccess,
  } = useMutationLogin();

  const validationSchema = object({
    account: string().required("Compte requis"),
    password: string().required("Mot de passe requis"),
  });

  const onSubmitHandler = async (
    values: {
      account: string;
      password: string;
    },
    action: FormikHelpers<typeof values>
  ) => {
    // if (createAcc)
    // register({ password: values.password, username: values.username });
    // else
    login({ password: values.password, username: values.account });
    action.resetForm();
  };

  useEffect(() => {
    if (loginSuccess) navigation.navigate("Home");
  }, [loginSuccess]);

  return (
    <View>
      <Formik
        initialValues={{
          account: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
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
              disabled={
                !!form.errors.account || !!form.errors.password || loadingLogin
              }
              onPress={() => form.handleSubmit()}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
