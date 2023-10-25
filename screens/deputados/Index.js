import React, { useEffect, useState } from 'react'
import apiDeputados from '../../services/apiDeputados'
import { Card, IconButton, Text } from 'react-native-paper'
import { Image, View } from 'react-native'



const Index = ({navigation}) => {

   // const [deputados, setDeputados] = useState([])

    const [partido, setPartido] = useState([])

    useEffect(() => {
        // apiDeputados.get('/deputados/').then(resultado => {
        //     setDeputados(resultado.data.dados)
        // })
            apiDeputados.get('/partidos/').then(resultado => {
                setPartido(resultado.data.dados)

        })
    }, [])


    return (
        <>
         <View style={{ padding: 15 }}>
            {partido.map(item => (
                <>

                    <Card mode='outlined' key={item.id} style={{ marginBottom: 15 }}>
                        <Card.Title
                            title={item.nome}
                            left={(props) =>
                                <Image
                                    source={{ uri: item.urlLogo}}
                                    style={{ width: 40, height: 40, borderRadius: 40 }}
                                ></Image>
                            }
                            right={(props) => <IconButton{...props} icon="chevron-right"   
                            onPress={() => navigation.push('Filmes-Detalhes', {id: item.id})}></IconButton>}
                            
                        />
                             <Text variant="titleLarge">{item.id}</Text>
                    </Card>
                </>
            ))}
           
            </View>
        </>
    )
}

export default Index