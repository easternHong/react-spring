export class AudioPlayer {

    private enable = false

    enablePlay(enable: boolean) {
        this.enable = enable
    }

    isEnable() {
        return this.enable
    }

    playAudio(url: string) {
        if (!this.enable) return
        new Audio(url).play()
    }
}

const audioPlayer = new AudioPlayer()

export default audioPlayer