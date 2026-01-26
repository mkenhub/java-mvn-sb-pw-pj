package pj.sample;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloApi {
    @GetMapping("/hello")
    public ResponseEntity<?> hello() {
        return ResponseEntity.ok().body(
                new HelloResponse("Hello")
        );
    }
}
