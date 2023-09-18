import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import styles from "./styles/contentMeta.scss"

export default (() => {
  function ContentMetadata({ cfg, fileData }: QuartzComponentProps) {
    const text = fileData.text
    if (text) {
      const segments: string[] = []
      const { text: timeTaken, words: _words } = readingTime(text)
      var date = ""
      var title = "создано"

      if (fileData.dates) {
        const created = formatDate(getDate(cfg, fileData)!)
        const modified = formatDate(fileData.dates!.modified)

        date = created

        if (created !== modified) {
          date = modified + " ⬆"
          title = "создано: " + created
        }
      }

      return <div class="content-meta">
        <p>{timeTaken}</p>
        <p>•</p>
        <p title={title}>{date}</p>
      </div>
    } else {
      return null
    }
  }

  ContentMetadata.css = styles

  return ContentMetadata
}) satisfies QuartzComponentConstructor
