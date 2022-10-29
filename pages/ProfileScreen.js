import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

function ProfileScreen() {
  const [data, setData] = useState('');
  const [githubData, setGithubData] = useState('');
  const [count, setCount] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get('https://reqres.in/api/users/' + count.toString())
        .then(res => setData(res.data.data))
        .catch(e => Alert.alert('Gagal!', e));
      return request;
    }

    async function fetchGithubData() {
      const request = await axios
        .get('https://api.github.com/users/ezralazuardy')
        .then(res => setGithubData(res.data))
        .catch(e => Alert.alert('Gagal!', e));
      return request;
    }

    fetchData();
    fetchGithubData();
  }, [count]);

  const next = () => {
    const nextCount = count + 1;
    setCount(nextCount);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: data.avatar,
          }}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>
          {data.first_name + ' ' + data.last_name}
        </Text>
        <Text style={styles.headerTextDesc}>{data.email}</Text>
      </View>
      <TouchableOpacity style={styles.bodyTouchable} onPress={() => next()}>
        <Text style={styles.bodyText}>NEXT</Text>
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <Text style={styles.cardHeaderText}>{'GitHub Profile'}</Text>
        <Image
          source={{
            uri: githubData.avatar_url,
          }}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{githubData.name}</Text>
        <Text style={styles.headerSecondaryText}>{githubData.login}</Text>
        <Text style={styles.headerTextDesc}>{githubData.blog}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#1363DF',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    paddingBottom: 10,
  },
  profileContainer: {
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingBottom: 30,
  },
  headerImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginVertical: 10,
  },
  cardHeaderText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    paddingTop: 25,
    paddingBottom: 15,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSecondaryText: {
    color: '#fff',
  },
  headerTextDesc: {
    color: '#fff',
  },
  bodyTouchable: {
    alignSelf: 'center',
    backgroundColor: '#47B5FF',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    margin: 20,
  },
  bodyText: {
    color: '#efd',
    fontSize: 20,
  },
});

export default ProfileScreen;
