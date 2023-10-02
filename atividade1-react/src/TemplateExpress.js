const Template = () => {
    const nome = "Aira";
    const dados = {
        idade: 20,
        cargo: "Desenvolvedora"
    };
     return (
        <div>
           <h3> OLÁ { nome } , tudo bem ? </h3>
           <p> Você atua como: {dados.cargo} </p>
        </div>
    );
 };

 export default Template;