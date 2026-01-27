package pj.sample;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HelloPageController {

    @GetMapping("/hello-page")
    public String helloPage(
            @RequestParam(name = "fetch", required = false, defaultValue = "false") boolean fetch,
            Model model
    ) {
        model.addAttribute("pageTitle", "Hello Sample");

        // fetchパラメータがtrueの場合、メッセージを取得して表示
        if (fetch) {
            model.addAttribute("helloMessage", "Hello");
        } else {
            model.addAttribute("helloMessage", "未取得");
        }

        return "hello";
    }
}
