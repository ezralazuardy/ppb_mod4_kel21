import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {data} from '../common/Data';

function HomeScreen() {
  const ListItemNama = dataPassing => {
    return (
      <View
        style={
          dataPassing.dataNama.id % 2 === 1
            ? styles.oddItemListContainer
            : styles.evenItemListContainer
        }>
        <View>
          <View style={styles.itemListLine} />
        </View>
        <View style={styles.itemListContent}>
          <Text style={styles.itemListText}>
            {'Nama : ' + dataPassing.dataNama.nama}
          </Text>
          <Text style={styles.itemListText}>
            {'NIM : ' + dataPassing.dataNama.nim}
          </Text>
          <Text style={styles.itemListText}>
            {'Kelompok : ' + dataPassing.dataNama.kelompok}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: 'https://bit.ly/39BPh9p',
          }}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>PRAKTIKUM MDP MODUL 4 KELOMPOK 21</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        renderItem={({item}) => <ListItemNama dataNama={item} />}
        keyExtractor={item => item.id}
        style={styles.flatlist}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#1363DF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerImage: {
    height: 120,
    width: 100,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  flatlist: {
    flex: 1,
    marginHorizontal: 10,
  },
  oddItemListContainer: {
    height: 100,
    backgroundColor: '#47B5FF',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  evenItemListContainer: {
    height: 100,
    backgroundColor: '#DFF6FF',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  itemListContent: {
    marginLeft: 10,
  },
  itemListLine: {
    backgroundColor: '#06283D',
    width: 5,
    height: '80%',
  },
  itemListText: {
    color: '#06283D',
    marginVertical: 2,
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default HomeScreen;
