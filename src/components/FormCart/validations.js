import * as Yup from 'yup';
import "yup-phone";


export const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'Слишком короткое имя!')
    .max(15, 'Слишком длинное имя!')
    .required('Required'),
  lastname: Yup.string()
    .min(3, 'Слишком короткая запись')
    .max(15, 'Слишком длинная запись')
    .required('Required'),
  age: Yup.number()
    .moreThan(20, 'Возраст должен быть больше 21 года')
    .required('Required'),
  deliveryAddress: Yup.string()
    .min(5, 'Слишком короткая запись')
    .max(30, 'Слишком длинная запись')
    .required('Required'),
  phoneNumber: Yup.string()
    .phone('UA', true, 'Номер телефона должен соответствовать региону UA')
    .required('Required')
});