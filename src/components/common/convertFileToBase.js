const Convert = (newFile) => {
  const getBase64 = file => {
    return new Promise(resolve => {
      let baseURL = "";
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

    const result = getBase64(newFile)
      .then(result => {
        newFile["base64"] = result;
        return result;
      })
      .catch(err => {
        console.log(err);
      });

      return result;

};

export default Convert;