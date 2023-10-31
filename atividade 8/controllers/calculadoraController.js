exports.mostrarFormulario = (req, res) => {
    res.render('index');
  };
  
  exports.calcular = (req, res) => {
    const { numeroA, numeroB, operacao } = req.body;
    let resultado;
  
    switch (operacao) {
      case '+':
        resultado = parseFloat(numeroA) + parseFloat(numeroB);
        break;
      case '-':
        resultado = parseFloat(numeroA) - parseFloat(numeroB);
        break;
      case '*':
        resultado = parseFloat(numeroA) * parseFloat(numeroB);
        break;
      case '/':
        resultado = parseFloat(numeroA) / parseFloat(numeroB);
        break;
    }
  
    res.render('resultado', { resultado });
  };
  