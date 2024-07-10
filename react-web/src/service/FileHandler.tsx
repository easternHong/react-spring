export interface FileHandler {
    readWebFile(file: string): void

    readLocalFile(file: File): void
}
