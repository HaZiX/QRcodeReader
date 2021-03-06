import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'

const QRcodeScanner = () => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        getPermissionsAsync();
    }, []);

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        setHasCameraPermission({ hasCameraPermission: status === 'granted' });
    };

    handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(data);
    };

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>

            {hasCameraPermission === null && <Text>Requesting for camera permission</Text>}
            {!hasCameraPermission && <Text>No access to camera</Text>}

            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            {scanned && (
                <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
            )}
        </View>
    );
}

export default QRcodeScanner
