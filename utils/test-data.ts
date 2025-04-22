import user from '../fixtures/mock-user.json';

export const validUser = {
    username: user.username,
    password: user.password,
};

export const invalidPasswordUser = {
    username: user.username,
    password: user.invalidPassword,
}
