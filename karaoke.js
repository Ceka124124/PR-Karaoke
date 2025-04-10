// Zego SDK'yı dahil et
import Zego from 'zego-sdk';  // Zego SDK'nın import edilmesi gerektiğini unutma!

const appID = 18086609; // Zego AppID
const appSign = '6c09f1501d63b3d762b53e3b1fa4c22f4084327a25ec2318e0c7862b8270c543'; // AppSign
const serverURL = 'wss://webliveroom18086609-api.coolzcloud.com/ws'; // WebSocket server URL'si

let roomID = 'karaokeRoom';  // Oda adı
let userID = 'user123';      // Kullanıcı ID'si
let userName = 'Kullanıcı Adı';  // Kullanıcı adı

// Zego bağlantısını başlatma
const startConnection = () => {
    Zego.init({
        appID: appID,
        appSign: appSign,
        serverURL: serverURL,
    });

    // Odayı oluştur ve kullanıcıyı ekle
    Zego.createRoom({
        roomID: roomID,
        userID: userID,
        userName: userName,
    });

    Zego.start(); // Bağlantıyı başlatıyoruz.
}

// Mikrofon açma/kapama işlevi
const toggleMicrophone = () => {
    let micStatus = Zego.getMicrophoneStatus();  // Mikrofon durumunu kontrol et
    if (micStatus === 'open') {
        Zego.closeMicrophone();  // Mikrofonu kapat
    } else {
        Zego.openMicrophone();   // Mikrofonu aç
    }
};

// Video açma/kapama işlevi
const toggleVideo = () => {
    let videoStatus = Zego.getVideoStatus();  // Video durumunu kontrol et
    if (videoStatus === 'open') {
        Zego.closeVideo();  // Videoyu kapat
    } else {
        Zego.openVideo();   // Videoyu aç
    }
};

// Şarkı söyleme ve mikrofon sesini kontrol etme
const startKaraoke = () => {
    // Burada şarkı söylerken kullanıcının sesini kontrol edebiliriz.
    // Örneğin, ses seviyesi ayarlama, efekt ekleme vb. yapılabilir.
    Zego.adjustMicVolume(75);  // Mikrofon ses seviyesini %75 yap
};

// Odaya katılacak birini ekleme
const addUserToRoom = (newUserID, newUserName) => {
    Zego.addUserToRoom({
        roomID: roomID,
        userID: newUserID,
        userName: newUserName,
    });
};

// Sohbet özelliği ekleme
const sendMessage = (message) => {
    Zego.sendMessage({
        roomID: roomID,
        userID: userID,
        message: message,
    });
};

startConnection();  // Bağlantıyı başlat

// Mikrofonu kontrol et
document.getElementById('micButton').addEventListener('click', toggleMicrophone);

// Video açma/kapama
document.getElementById('videoButton').addEventListener('click', toggleVideo);

// Karaoke başlat
document.getElementById('karaokeButton').addEventListener('click', startKaraoke);
