import * as yup from 'yup'

const userSchema =  new yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    password: yup.string().min(8, ({min}) => `Password must be at least ${min} characters`).required('Password is required')
    // .matches(
    //    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$",
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    //   )
})

export default userSchema