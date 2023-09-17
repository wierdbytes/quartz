import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>😞 404</h1>
      <p>Страница не существует или не опубликована.</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
