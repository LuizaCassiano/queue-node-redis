export default {
  key: 'PersonAdd',
  options: {
    delay: 10,
  },
  async handle({ data }) {
    const { user } = data;
    console.log(user);
  },
};