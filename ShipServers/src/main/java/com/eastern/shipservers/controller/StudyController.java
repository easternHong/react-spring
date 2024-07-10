package com.eastern.shipservers.controller;


import com.eastern.shipservers.bean.Idioms;
import com.eastern.shipservers.bean.Xiehouyu;
import com.eastern.shipservers.service.IStudyIdiomService;
import com.eastern.shipservers.service.IStudyXiehouyuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/study")
public class StudyController {

    @Autowired
    IStudyIdiomService idiomService;

    @Autowired
    IStudyXiehouyuService xiehouyuService;

    @GetMapping("/idioms/random")
    @CrossOrigin(origins = "http://localhost:5173", maxAge = 3600)
    public ResponseEntity<Idioms> random(@RequestHeader HttpHeaders header) {
        return ResponseEntity.ok()
                .body(idiomService.random());
    }

    @GetMapping("/xiehouyu/random")
    @CrossOrigin(origins = "http://localhost:5173", maxAge = 3600)
    public ResponseEntity<Xiehouyu> randomOne() {
        return ResponseEntity.ok()
                .body(xiehouyuService.random());
    }

    @GetMapping("/xiehouyu/count")
    public long count() {
        return xiehouyuService.count();
    }

    @GetMapping("/idioms/count")
    public long _count() {
        return idiomService.count();
    }

//    @GetMapping("/xiehouyu/save")
//    public void saveAll() {
//        new Thread(new Runnable() {
//            @Override
//            public void run() {
//                try {
//                    Resource resource = Arrays.stream(new PathMatchingResourcePatternResolver().getResources("classpath:*.json")).toList()
//                            .stream().filter(new Predicate<Resource>() {
//                                @Override
//                                public boolean test(Resource resource) {
//                                    return resource.getFilename().contains("xiehouyu");
//                                }
//                            }).findFirst().get();
//                    try {
//                        File file = resource.getFile();
//                        Type listType = new TypeToken<List<Xiehouyu>>() {
//                        }.getType();
//                        FileReader reader = new FileReader(file);
//                        List<Xiehouyu> xiehouyus = new Gson().fromJson(reader, listType);
//                        xiehouyuService.save(xiehouyus);
//                        System.out.println("xiehouyus:" + xiehouyus.size());
//                    } catch (IOException e) {
//                        throw new RuntimeException(e);
//                    }
//                    System.out.println();
//                } catch (IOException e) {
//                    throw new RuntimeException(e);
//                }
//            }
//        }).start();
//    }
//
//
//    @GetMapping("/idioms/save")
//    public void idiomsSaveAll() {
//        new Thread(new Runnable() {
//            @Override
//            public void run() {
//                try {
//                    Resource resource = Arrays.stream(new PathMatchingResourcePatternResolver().getResources("classpath:*.json")).toList()
//                            .stream().filter(new Predicate<Resource>() {
//                                @Override
//                                public boolean test(Resource resource) {
//                                    return resource.getFilename().contains("idiom");
//                                }
//                            }).findFirst().get();
//                    try {
//                        File file = resource.getFile();
//                        Type listType = new TypeToken<List<Idioms>>() {
//                        }.getType();
//                        FileReader reader = new FileReader(file);
//                        List<Idioms> xiehouyus = new Gson().fromJson(reader, listType);
//                        idiomService.save(xiehouyus);
//                        System.out.println("Idioms:" + xiehouyus.size());
//                    } catch (IOException e) {
//                        throw new RuntimeException(e);
//                    }
//                    System.out.println();
//                } catch (IOException e) {
//                    throw new RuntimeException(e);
//                }
//            }
//        }).start();
//    }
}
