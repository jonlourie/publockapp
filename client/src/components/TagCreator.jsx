import React from 'react';
import QRCode from 'react-qr-code';

function TagCreator({ address, id }) {
  const nftUrl = `${address}/${id}`; //https://opensea.io/assets/ we could add the opensea link or an IPFS link with metadata or phot data 
  const qrCodeSize = 256; // in pixels


  return (
    <QRCode
      value={nftUrl}
      size={qrCodeSize}
      level="L" // set the error correction level to low
      includeMargin={false} // don't include a white border around the QR code
    />
  );
}

export default TagCreator;
