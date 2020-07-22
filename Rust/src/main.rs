use std::env;
use std::fs::File;
// use std::path::Path;
use regex::Regex;
use std::io::{Write, Error, BufReader, BufRead};

fn main() -> Result<(), Error>  {
    let args: Vec<String> = env::args().collect();
    let name: &str = &args[1];
    let pattern = format!("{{{}}}", name);
    let expression = Regex::new(r"{{name}}").unwrap();
    println!("{:?}", args);
    let path = env::current_dir().unwrap();
    println!("{}", path.display());
    let template = File::open("template.js")?;
    let template_buffer = BufReader::new(template);
    let mut output = File::create("test.js")?;
    let mut content = String::new();
    // output.write_all("test");
    for line in template_buffer.lines(){
        let linestr = format!("{}", line?);
        // let res = expression.replace_all(line?, &name);
        let res = linestr.replace("{{name}}", &name);
        println!("{}", res);
        content.push_str(&String::from(res+"\n"));
    }
    write!(output, "{}", content)?;
    Ok(())
}



