package pj.sample;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloPageController {

    @GetMapping("/hello-page")
    public String helloPage(Model model) {
        model.addAttribute("pageTitle", "Hello Sample");
        return "hello";
    }
}
