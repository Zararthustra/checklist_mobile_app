import { Formik, FormikHelpers } from "formik";
import { Text, TextInput, View } from "react-native";
import { object, string } from "yup";
import { useContext } from "react";
import { AuthContext } from "@utils/authContext";
import { Button } from "@components/index";
import { IconLogin } from "@assets/index";

export const LoginForm = ({
  isLogging,
  navigation,
}: {
  isLogging: boolean;
  navigation: any;
}) => {
  const { signIn, signUp } = useContext(AuthContext);

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
    if (isLogging)
      signIn({ password: values.password, username: values.account });
    else {
      signUp({ password: values.password, username: values.account });
      navigation.goBack();
    }
    action.resetForm();
  };

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
              <TextInput
                className="border-zinc-300 dark:text-white dark:border-zinc-700 border-[1px] px-2 py-1 rounded-sm w-[180px]"
                placeholder="Compte"
                placeholderTextColor="#b0b0b0"
                onChangeText={form.handleChange("account")}
                value={form.values.account}
                onBlur={form.handleBlur("account")}
              />
              <Text>{form.touched.account && form.errors.account}</Text>
            </View>

            {/* Password */}
            <View>
              <TextInput
                className="border-zinc-300 dark:text-white dark:border-zinc-700 border-[1px] px-2 py-1 rounded-sm w-[180px]"
                placeholder="Mot de passe"
                placeholderTextColor="#b0b0b0"
                textContentType="password"
                onChangeText={form.handleChange("password")}
                value={form.values.password}
                onBlur={form.handleBlur("password")}
              />
              <Text>{form.touched.password && form.errors.password}</Text>
            </View>

            <Button
              text={isLogging ? "Se connecter" : "Créer mon compte"}
              color="#61a146"
              textColor="white"
              disabled={!!form.errors.account || !!form.errors.password}
              onPress={() => form.handleSubmit()}
              icon={<IconLogin className="text-white" width={22} height={22} />}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
