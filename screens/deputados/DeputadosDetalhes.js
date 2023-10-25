import React, { useEffect, useState } from 'react'
import { Card, IconButton, Text } from 'react-native-paper'
import apiDeputados from '../../services/apiDeputados'
import { Image, ScrollView,  } from 'react-native'

const DeputadosDetalhes = ({ navigation, route }) => {

  const [deputado, setDeputado] = useState({})
  
  useEffect(() => {

    const id = route.params.id

    apiDeputados.get(`/movie/${id}`).then(resultado => {
        setDeputado(resultado.data)
    })
  }, [])

  return (

    <>
          <ScrollView style={{padding:15}}>
          <Text variant='titleLarge'>Atores</Text>

          {deputado.map(item => (
                <Card mode='outlined' 
                key={item.id}
                onPress={() => navigation.push('Atores', {id: item.id})} >
                <Card.Title
                title={item.charater}
                subtitle={item.name}
                left={(props) =>

                    <Image 
                    source={{uri: item.profile_path}}
                    style={{width: 40, height:40, borderRadius:20}}
                    />
                }   
                right={(props) => <IconButton{...props} icon="dots-vertical" 
            />
        }           
              />
                </Card>
             )

             )}
          
          </ScrollView>
    </>
  )
}

export default DeputadosDetalhes