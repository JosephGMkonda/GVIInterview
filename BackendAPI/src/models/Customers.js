import { DataTypes } from 'sequelize';
import sequelize from '../conf/database.js';

const Customer = sequelize.define('Customer', {
  customer_id: {
    type: DataTypes.STRING(255),
    primaryKey: true,
  },
  full_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  national_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  address: {
    type: DataTypes.TEXT
  },
  product_installed: {
    type: DataTypes.STRING
  },
  payment_schedule: {
    type: DataTypes.STRING
  },
  customer_status: {
    type: DataTypes.STRING,
    defaultValue: 'Active'
  }
}, {
  tableName: 'customers',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Customer;