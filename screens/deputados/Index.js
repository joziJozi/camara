import React, { useEffect, useState } from 'react'
import apiDeputados from '../../services/apiDeputados'
import { Card, IconButton, Text } from 'react-native-paper'
import { Image, View } from 'react-native'



const Index = () => {

    const [deputados, setDeputados] = useState([])


    useEffect(() => {
        apiDeputados.get('/deputados/').then(resultado => {
            setDeputados(resultado.data.dados)
        })
    }, [])


    return (
        <>
         <View style={{ padding: 15 }}>
            {deputados.map(item => (
                <>

                    <Card mode='outlined' key={item.id} style={{ marginBottom: 15 }}>
                        <Card.Title
                            title={item.nome}
                            left={(props) =>
                                <Image
                                    source={{ uri:item.urlFoto }}
                                    style={{ width: 40, height: 40, borderRadius: 40 }}
                                ></Image>
                            }
                            right={(props) => <IconButton{...props} icon="chevron-right"   onPress={() => navigation.push('Filmes-Detalhes', {id: item.id})}></IconButton>}
                            
                        />
                        
                    </Card>
                </>
            ))}
            </View>
        </>
    )
}

export default Index