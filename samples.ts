//-------------------------------------------------
// README samples
//-------------------------------------------------
namespace ui.core.samples {
    class HelloScreen extends ui.UiScreen {
        public render(surface: ui.DrawSurface): void {
            surface.drawText("Hello", 19, 11, { color: 3 })
            surface.drawRect(new ui.Rect(4, 4, 60, 22), 7)
            super.render(surface)
        }
    }

    class CounterScreen extends ui.UiScreen {
        private count: number

        constructor(runtime: ui.UiRuntime) {
            super(runtime)
            this.count = 0
            this.backgroundColor = 0
        }

        public handleInput(event: ui.UiInputEvent): boolean | undefined {
            if (event.phase == "released") return undefined

            if (event.action == "activate") {
                this.count += 1
            } else if (event.action == "cancel") {
                this.count = 0
            } else {
                return undefined
            }

            return true
        }

        public render(surface: ui.DrawSurface): void {
            surface.drawText("Count:", 8, 8, { color: 1 })
            surface.drawText("" + this.count, 8, 24, { color: 7 })
            super.render(surface)
        }
    }

    const runtime = new ui.UiRuntime(new ui.DisplayShieldFrameAdapter())
    runtime.push(new HelloScreen(runtime))
    //runtime.push(new CounterScreen(runtime))
    runtime.start()
}
