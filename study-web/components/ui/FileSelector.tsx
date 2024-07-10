import React, {Component, RefObject} from "react";
import {FileHandler} from "@/components/service/FileHandler";
import {ISelector} from "@/components/ui/ImageSelector";

interface Props {
    className?: string,
    fileAccept?: string,
    fileHandler?: FileHandler,
    localFile?: File | null,
    btnContent?: string
}


export class FileSelector extends Component<Props, Props> implements ISelector {
    private fileSelectorRef: RefObject<HTMLInputElement>;
    private fileHandler?: FileHandler;

    constructor(props: Props) {
        super(props);
        this.fileHandler = props.fileHandler
        this.fileSelectorRef = React.createRef()
        this.state = {
            fileHandler: props.fileHandler,
            localFile: null
        }
    }

    currentFile(): string | File | undefined {
        return this.state.localFile ?? undefined
    }

    showOpenFileDialog() {
        this.fileSelectorRef?.current!.click();
    }


    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) return;
        const fileObject: File | null = event.target.files[0];
        if (!fileObject) return;
        this.fileHandler?.readLocalFile(fileObject)
        this.setState({
            localFile: fileObject
        })
    }

    render() {
        return (
            <div
                className={[this.props.className].join('')}>
                <div
                    onClick={() => {
                        this.showOpenFileDialog()
                    }}
                    className='bg-blue-200 block p-2 rounded '>
                    <input
                        ref={this.fileSelectorRef}
                        type="file"
                        style={{display: "none"}
                        }
                        accept={this.props.fileAccept ?? "image/*"}
                        onChange={(e) => {
                            this.handleChange(e)
                        }}
                    />
                    {this.props.btnContent}
                </div>
            </div>
        )
    }
}
