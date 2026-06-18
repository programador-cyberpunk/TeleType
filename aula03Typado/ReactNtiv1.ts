const Saudacao = ({nome}: {nome: string }) =>{
    return <Text> Saudacao, {nome}! </Text>;
};

const {usuario, sair} = useAuth();
const handlePress({nativeEvent}: GestureResponderEvent) =>{
    console.log(nativeEvent);
}
