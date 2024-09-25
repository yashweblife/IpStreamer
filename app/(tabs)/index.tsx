import { useEffect, useRef, useState } from 'react';
import { Button, Image, StyleSheet, TextInput, View } from 'react-native';
import WebView from 'react-native-webview';
export default function HomeScreen() {
  const [feedSourceURL, setFeedSourceURL] = useState('http://192.168.0.28:81/stream');
  const urlRef = useRef<HTMLInputElement>(null);
  const [isReady, setIsReady] = useState(false);
  const webcamRef = useRef<WebView>(null);
  useEffect(() => {
    ready();
  },[])
  async function ready(){
    // await tf.ready()
    if(!webcamRef.current) return
    // tf.data.webcam(webcamRef.current!)
    // setIsReady(true)
    webcamRef.current
  }
  async function handleSubmit() {
    if (!urlRef.current) return;
    const val = urlRef.current.value;
    try {
      const test = await fetch(val)
      if (test) {
        setFeedSourceURL(urlRef.current.value);
      }
    } catch (e) {
      console.log(e);
    }

  }
  return (
    <View style={{ padding: 20, marginTop: 30, width: "100%", display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column", height: 300, borderRadius: "50%" }}>
      {/* <WebView
      ref={webcamRef}
        style={{ flex: 1, width: 300, height: 300, aspectRatio: 1 }}
        source={{
          uri: feedSourceURL
        }}
      ></WebView> */}
      <Image
        style={{ flex: 1, width: 300, height: 300, aspectRatio: 1 }}
        source={{uri:"http://192.168.0.28:81/stream"}}
      ></Image>
      <View style={{ flexDirection: "row", gap: 8, width: "300px" }}>
        <TextInput style={{ width: 200, padding: 10 }} ref={urlRef}></TextInput>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
