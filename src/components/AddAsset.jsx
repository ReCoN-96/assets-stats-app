import React from 'react';
import AssetForm from './AssetForm';

const AddAsset = ({ setAssets }) => (
  <AssetForm onSubmit={setAssets} />
);

export default AddAsset;
