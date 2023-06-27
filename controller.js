const dotenv = require("dotenv");
dotenv.config();

const AWS = require("aws-sdk");

const my_aws_access_key = process.env.AmazonAccessKey;
const my_aws_secret_key = process.env.AmazonSecreteKey;
const my_aws_rejoin = process.env.AmazonRejoin;
const aws_table = process.env.AmazonTable;

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: my_aws_rejoin,
  accessKeyId: my_aws_access_key,
  secretAccessKey: my_aws_secret_key,
});

const insertDocument = async (payload) => {
  const { roll_number, address, full_address, phone, name } = payload;
  const param = {
    TableName: aws_table,
    Item: {
      roll_number: roll_number,
      address: address,
      full_address: full_address,
      phone: phone,
      name: name,
    },
  };

  const dbItems = new Promise((req, res) => {
    dynamoDB.put(param, (error, data) => {
      if (error) {
        return {
          error: JSON.stringify(error),
        };
      } else {
        return {
          status: "success",
        };
      }
    });
  });

  const data = await dbItems;
  return data;
};

module.exports = {
  insertDocument,
};
