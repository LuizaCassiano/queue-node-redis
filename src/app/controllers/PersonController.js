import Queue from '../lib/Queue';

export default {
  async insert(req, res) {
    const { arrivalNumber, name, email, phoneNumber } = req.body;
    const person = { arrivalNumber, name, email, phoneNumber
    };
    await Queue.add('PersonAdd', { person });
    return res.json(person);
  },

  async get(req, res) {
    await Queue.show('PersonAdd').then(result => {
      var array = result.map(function(item) {
        return item.data;
      });
      return res.json(array);
    });
  },

  async delete(req, res) {
    await Queue.remove('PersonAdd').then(result => {
      return res.json(result);
    });
  }
};