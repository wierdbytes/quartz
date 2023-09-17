import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/backlinks.scss"
import { resolveRelative, simplifySlug } from "../util/path"

function Backlinks({ fileData, allFiles }: QuartzComponentProps) {
  const slug = simplifySlug(fileData.slug!)
  const backlinkFiles = allFiles.filter((file) => file.links?.includes(slug))
  
  if (backlinkFiles.length == 0) {
    return (
      <></>
    )
  }
  
  return (
    <div class="backlinks">
      <h3>Backlinks</h3>
      <ul class="overflow">
        {backlinkFiles.length > 0 ? (
          backlinkFiles.map((f) => (
            <li>
              <a href={resolveRelative(fileData.slug!, f.slug!)} class="internal">
                {f.frontmatter?.title}
              </a>
            </li>
          ))
        ) : (
          <li>Беклинки не найдены</li>
        )}
      </ul>
    </div>
  )
}

Backlinks.css = style
export default (() => Backlinks) satisfies QuartzComponentConstructor
