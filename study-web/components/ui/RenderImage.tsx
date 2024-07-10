import React, {Component, RefObject} from "react";
import {ISelector} from "@/components/ui/ImageSelector";
import {FileHandler} from "@/components/service/FileHandler";


interface Props {
    // ref?: RefObject<HTMLElement>
    className?: string,
    textArea?: RefObject<HTMLTextAreaElement>,
    iSelector?: RefObject<ISelector>
}

export default class RenderImage extends Component<Props, Props> implements FileHandler {
    private canvasContentRef: RefObject<HTMLCanvasElement>
    private image = new Image()
    private canvasWidth: number = 512

    constructor(props: Props) {
        super(props);
        this.canvasContentRef = React.createRef()
    }

    readWebFile(file: string) {
        if (file.startsWith("http")) {
            this.readNetImage(file)
        }
    }


    renderImage = () => {
        console.log('canvasContentRef:', this.canvasContentRef)
        const canvas: HTMLCanvasElement | null = this.canvasContentRef.current;
        const ctx = canvas!.getContext('2d');
        if (!ctx) return;
        if (!canvas) return;
        if (!this.props.textArea?.current) return;
        this.canvasWidth = this.canvasContentRef.current?.clientWidth ?? 512
        const scaleFactor = this.canvasWidth / this.image.width;
        const scaledHeight = this.image.height * scaleFactor;
        const lineHeight = 50;
        const fontSize = 20;
        const imageLineHeight = lineHeight / scaleFactor;
        const lines = this.props.textArea.current.value.split('\n')
        canvas.width = this.canvasWidth;
        canvas.height = scaledHeight;

        if (lines.length > 1) {
            canvas.height += (lines.length - 1) * lineHeight;
        }
        ctx.drawImage(this.image, 0, 0, canvas!.width, scaledHeight);

        ctx.font = '20px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        for (let i = 0; i < lines.length; i++) {
            if (i > 0) {
                const sx = 0, sy = this.image.height - imageLineHeight, sw = this.image.width, sh = imageLineHeight;
                const dx = 0, dy = scaledHeight + (i - 1) * lineHeight, dw = canvas.width, dh = lineHeight;
                ctx.drawImage(this.image, sx, sy, sw, sh, dx, dy, dw, dh);
            }
            const y = scaledHeight + i * lineHeight - (lineHeight - fontSize) / 2;
            ctx.fillText(lines[i], canvas.width / 2, y);
        }
        ctx.font = '12px Arial';
        ctx.fillStyle = 'grey';
        ctx.textAlign = 'right';
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.fillText('字幕截图生成器', canvas.width, 12);
        ctx.fillText('@hds', canvas.width, 24);
    }

    readLocalFile(file: File) {
        const outImage = this.image
        const outRenderImage = this.renderImage
        const reader = new FileReader();
        reader.onload = function (event) {
            // imageContentRef.current.src = event.target.result; //
            outImage.src = event.target?.result as string;
            outImage.onload = outRenderImage
        };
        reader.readAsDataURL(file);
    }

    readNetImage(fileObject: string) {
        this.image.addEventListener("load", () => {
            console.log('loading load')
            this.renderImage()
        }, {
            once: true
        });
        this.image.addEventListener("error", () => {
            console.log('loading error')
            this.renderImage()
        }, {
            once: true
        });
        //Uncaught DOMException: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted
        this.image.crossOrigin = 'anonymous'
        this.image.src = fileObject
    }


    saveImage() {
        const canvas: HTMLCanvasElement | null = this.canvasContentRef.current;
        if (!canvas) return
        const link = document.createElement('a')
        link.download = 'test.png'
        link.href = canvas.toDataURL()
        link.click()
    }

    generateImage() {
        const selector = this.props.iSelector?.current
        if (!selector) return
        console.log('current:', selector.currentFile())
        const current = selector.currentFile()
        if (Object.prototype.toString.call(current) === "[object String]") {
            this.readNetImage(current as string)
        } else if (current instanceof File) {
            this.readLocalFile(current)
        } else {
            console.log('current type:', typeof current)
            alert('没有图片')
        }
    }


    render() {
        return (
            <div
                className={[this.props.className].join('')}>
                <canvas
                    className='block w-full h-full rounded rounded-5'
                    ref={this.canvasContentRef}></canvas>
            </div>
        )
    }
}