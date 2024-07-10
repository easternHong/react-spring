import React, {Component, RefObject} from "react";
import {FileHandler} from "@/components/service/FileHandler";

interface Props {
    fileHandler: RefObject<FileHandler>,
    localFile?: File | null
}

export interface ISelector {
    currentFile(): string | File | undefined
}

export class ImageSelector extends Component<Props, Props> implements ISelector {
    private imageSelectorRef: RefObject<HTMLInputElement>;
    private remoteImageRef: RefObject<HTMLTextAreaElement>;
    private fileHandler: RefObject<FileHandler>;

    constructor(props: Props) {
        super(props);
        this.fileHandler = props.fileHandler
        this.imageSelectorRef = React.createRef()
        this.remoteImageRef = React.createRef()
        this.state = {
            fileHandler: props.fileHandler,
            localFile: null
        }
    }

    currentFile(): string | File | undefined {
        if (this.state.localFile) return this.state.localFile!
        return this.remoteImageRef.current?.value
    }

    showOpenFileDialog() {
        this.imageSelectorRef?.current!.click();
    }


    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) return;
        const fileObject: File | null = event.target.files[0];
        if (!fileObject) return;
        this.fileHandler?.current?.readLocalFile(fileObject)
        this.setState({
            localFile: fileObject
        })
    }

    render() {
        return (
            <div className='w-full'>
                <div
                    onClick={() => {
                        this.showOpenFileDialog()
                    }}
                    className='bg-blue-200 block p-2 rounded '>
                    <input
                        ref={this.imageSelectorRef}
                        type="file"
                        style={{display: "none"}
                        }
                        accept="image/*"
                        onChange={(e) => {
                            this.handleChange(e)
                        }}
                    />
                    上传本机照片
                </div>
                <div className='flex w-full h-8 mt-2'>
                    <span className='w-full pl-1 border rounded '>{this.state.localFile?.name ?? '/'}</span>
                    <button
                        onClick={() => {
                            this.setState({
                                localFile: null
                            })
                        }}
                        className='w-12 ml-2 relative rounded rounded-5 bg-blue-200'>x
                    </button>
                </div>
                <div className='flex mt-2'>
                        <textarea
                            ref={this.remoteImageRef}
                            placeholder={'网络图片url'}
                            className='w-full pl-1 h-8 border rounded border-amber-400'/>
                    <button
                        onClick={() => {
                            if (this.remoteImageRef.current)
                                this.remoteImageRef.current.value = ''
                        }}
                        className='w-12 ml-2 relative rounded rounded-5 bg-blue-200'>x
                    </button>
                </div>
            </div>
        )
    }
}
