'use strict';

import Rules from '../modules/downscreen/downsections/rules/rules.js';
import Profile from '../modules/downscreen/downsections/profile/profile.js';
import Scoreboard from '../modules/downscreen/downsections/scoreboard/scoreboard.js';



class GlobalValues {
    constructor() {
        this._apiUrls = {
            GET: {
                USER: '/user',
                HISTORY: '/history',
                SCOREBOARD: '/scoreboard',
                ABOUT: '/about',
                RULES: '/rules',
                ME: '/me'
            },
        
            POST: {
                AUTH: '/login',
                SIGNUP: '/register',
                LOGOUT: '/logout',
                EDIT_USER: '/user'
            }
        }
    }

    get tabsOptions() {
        return [
            {
                name: 'profile',
                title: 'Profile',
                avaliable: false,
                active: false,
                sectionType: Profile,
                authDepends: true
            },
            {
                name: 'rules',
                title: 'Rules',
                avaliable: true,
                active: false,
                sectionType: Rules,
                authDepends: false
            },
            {
                name: 'scoreboard',
                title: 'Scoreboard',
                avaliable: true,
                active: false,
                sectionType: Scoreboard,
                authDepends: false
            },
        ]
    }

    get inputTypes() {
        return {
            email: 'email',
            password: 'password',
            text: 'text'
        };
    }

    get formsOptions() {
        return {
            authForm: {
                formTitle: 'Login',
                fields: [
                    {
                        label: 'Email',
                        type: globalValues.inputTypes.email,
                        placeholder: 'Email',
                        id: 'auth-email',
                        name: 'email'
                    },
                    {
                        label: 'Password',
                        type: globalValues.inputTypes.password,
                        placeholder: 'Password',
                        id: 'auth-password',
                        name: 'password'
                    }
                ],
                submitBtnText: 'Login!',
                changeFormBtn: {
                    text: 'Registration'
                }
            },

            signupForm: {
                formTitle: 'Registration',
                fields: [
                    {
                        label: 'Nickname',
                        type: globalValues.inputTypes.text,
                        placeholder: 'Nickname',
                        id: 'signup-nickname',
                        name: 'nickname'
                    },
                    {
                        label: 'Email',
                        type: globalValues.inputTypes.email,
                        placeholder: 'Email',
                        id: 'signup-email',
                        name: 'email'
                    },
                    {
                        label: 'Password',
                        type: globalValues.inputTypes.password,
                        placeholder: 'Password',
                        id: 'signup-password',
                        name: 'password'
                    },
                    {
                        label: 'Repeat рassword',
                        type: globalValues.inputTypes.password,
                        placeholder: 'Repeat password',
                        id: 'signup-repeat-password',
                        name: 'repeat-password'
                    }
                ],
                submitBtnText: 'Register!',
                changeFormBtn: {
                    text: 'Login'
                }
            }
        };
    }

    get apiUrls() {
        return this._apiUrls;
    }

    get errors() {
        return {
            input: {
                required: 'This field is required',
                minLength: (minLength) => 
                    `The minimum length is ${minLength} symbols`,
                passwordsCmp: 'Passwords do not match'
            }
        };
    }
}

const globalValues = new GlobalValues();

export default globalValues;