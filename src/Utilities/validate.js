export const checkValidation = (isSignInForm, name, email, password) => {
  const nameValidator = /^[a-zA-Z\s]+$/.test(name);

  const emailValidator =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      email
    );

  const passwordValidator =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  if (!isSignInForm && !nameValidator) return "Name is not valid";
  if (!emailValidator) return "Email is not valid";
  if (!passwordValidator) return "Password is not valid";
  else return null;
};
