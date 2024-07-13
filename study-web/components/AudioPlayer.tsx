export class AudioPlayer {

    private enable = true

    enablePlay(enable: boolean) {
        this.enable = enable
    }

    playAudio(url: string) {
        if (!this.enable) return
        new Audio(url).play()
    }
}

const audioPlayer = new AudioPlayer()

export default audioPlayer