'use strict';

import Rules from '../modules/downscreen/downsections/rules/rules.js';
import Profile from '../modules/downscreen/downsections/profile/profile.js';
import Scoreboard from '../modules/downscreen/downsections/scoreboard/scoreboard.js';


class GlobalValues {
    constructor() {
        this._apiUrls = {
            GET: {
                USER: '/user',
                HISTORY: ({mode, page}) => `/history/${mode}/page/${page}`,
                SCOREBOARD: ({mode, page}) => `/scoreboard/${mode}/page/${page}`,
                ABOUT: '/about',
                RULES: '/rules',
                ME: '/me'
            },
        
            POST: {
                AUTH: '/login',
                SIGNUP: '/signup',
                LOGOUT: '/logout',
                EDIT_USER: '/edit'
            }
        };
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
                        options: {
                            id: 'auth-email',
                            type: globalValues.inputTypes.email,
                            label: 'Email',
                            name: 'email',
                            placeholder: 'Email'
                        }
                    },
                    {
                        options: {
                            id: 'auth-password',
                            type: globalValues.inputTypes.password,
                            label: 'Password',
                            name: 'password',
                            placeholder: 'Password'
                        }
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
                        options: {
                            label: 'Nickname',
                            type: globalValues.inputTypes.text,
                            placeholder: 'Nickname',
                            id: 'signup-nickname',
                            name: 'nickname'
                        }
                    },
                    {
                        options: {
                            label: 'Email',
                            type: globalValues.inputTypes.email,
                            placeholder: 'Email',
                            id: 'signup-email',
                            name: 'email'
                        }
                    },
                    {
                        options: {
                            label: 'Password',
                            type: globalValues.inputTypes.password,
                            placeholder: 'Password',
                            id: 'signup-password',
                            name: 'password'
                        }
                    },
                    {
                        options: {
                            label: 'Repeat рassword',
                            type: globalValues.inputTypes.password,
                            placeholder: 'Repeat password',
                            id: 'signup-repeat-password',
                            name: 'repeat-password'
                        }
                    }
                ],
                submitBtnText: 'Register!',
                changeFormBtn: {
                    text: 'Login'
                }
            },

            nicknameForm: {
                fields: [{
                    options: {
                        type: globalValues.inputTypes.text,
                        id: 'edit-nickname',
                        name: 'nickname',
                        label: 'Nickname',
                        placeholder: 'Nickname',
                    }
                }], 
                submitBtnText: 'Save'
            },

            emailForm: {
                fields: [{
                    options: {
                        type: globalValues.inputTypes.email,
                        id: 'edit-email',
                        name: 'email',
                        label: 'Email',
                        placeholder: 'Email'
                    }
                }],
                submitBtnText: 'Save'
            },

            passwordForm: {
                fields: [
                    {
                        options: {
                            type: globalValues.inputTypes.password,
                            id: 'edit-old-password',
                            name: 'old-password',
                            label: 'Old password',
                            placeholder: 'Old password'
                        }
                    },
                    {
                        options: {
                            type: globalValues.inputTypes.password,
                            id: 'edit-new-password',
                            name: 'new-password',
                            label: 'New password',
                            placeholder: 'New password'
                        }
                    },
                    {
                        options: {
                            type: globalValues.inputTypes.password,
                            id: 'edit-new-password-repeat',
                            name: 'new-password-repeat',
                            label: 'Repeat password',
                            placeholder: 'Repeat new password'
                        }
                    }
                ],
                submitBtnText: 'Save'
            }
        };
    }

    get apiUrls() {
        return this._apiUrls;
    }

    get tablesOptions() {
        return {
            scoreboard: {
                singleplayer: [
                    {
                        title: '#',
                        name: 'index',
                        template: '60px'
                    },
                    {
                        title: 'Nickname',
                        name: 'nickname',
                        template: 'auto'
                    },
                    {
                        title: 'Score',
                        name: 'score',
                        template: '110px'
                    }
                ],
                multiplayer: [
                    {
                        title: '#',
                        name: 'index',
                        template: '60px'
                    },
                    {
                        title: 'Nickname',
                        name: 'nickname1',
                        template: 'minmax(30%, 40%)'
                    },
                    {
                        title: 'Nickname',
                        name: 'nickname2',
                        template: 'minmax(30%, 40%)'
                    },
                    {
                        title: 'Score',
                        name: 'score',
                        template: 'minmax(90px, auto)'
                    }
                ]
            },

            gameHistory: {
                singleplayer: [
                    {
                        title: '#',
                        name: 'index',
                        template: '60px'
                    },
                    {
                        title: 'Date',
                        name: 'date',
                        template: 'auto'
                    },
                    {
                        title: 'Score',
                        name: 'score',
                        template: '120px'
                    }
                ],
                multiplayer: [
                    {
                        title: '#',
                        name: 'index',
                        template: '60px'
                    },
                    {
                        title: 'Date',
                        name: 'date',
                        template: '120px'
                    },
                    {  
                        title: 'Partner',
                        name: 'partner',
                        template: 'auto'
                    },
                    {
                        title: 'Score',
                        name: 'score',
                        template: '120px'
                    }
                ]
            }
        }
    }
}

const globalValues = new GlobalValues();

export default globalValues;