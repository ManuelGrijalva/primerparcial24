package edu.ejercicios;


import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) {
        //ejemplo 1
//        List<String> names = Arrays.asList("John", "Jane", "Bob", "Alice");
//
//        long count = names.stream()
//                .filter(name -> name.startsWith("A"))
//                .count();
//
//        System.out.println("Número de nombres que empiezan por 'A': " + count);

        //ejemplo 2

//        List<String> names = Arrays.asList("John", "Jane", "Bob", "Alice");
//
//        String longestName = names.stream()
//                .max(Comparator.comparing(String::length))
//                .orElse(null);
//
//        System.out.println("Nombre más largo: " + longestName);

        //ejemplo 3

//        List<String> names = Arrays.asList("John", "Jane", "Bob", "Alice");
//
//        List<String> upperCaseNames = names.stream()
//                .map(String::toUpperCase)
//                .collect(Collectors.toList());
//
//        System.out.println("Lista de nombres en mayúsculas: " + upperCaseNames);

        //ejemplo 4

//        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 11, 12, 13);
//
//        int firstNumberGreaterThan10 = numbers.stream()
//                .filter(number -> number > 10)
//                .findFirst()
//                .orElse(null);
//
//        System.out.println("Primer número mayor que 10: " + firstNumberGreaterThan10);


        //ejemplo 5

//        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
//
//        int producto = numbers.stream()
//                .reduce(1, (a, b) -> a * b);
//
//        System.out.println("Producto de todos los números: " + producto);


        //ejemplo 6

//        List<String> nombres = Arrays.asList("John", "Jane");
//        List<String> apellidos = Arrays.asList("Doe", "Smith");
//
//        List<String> nombresCompletos = Stream.concat(nombres.stream(), apellidos.stream())
//                .collect(Collectors.toList());
//
//        System.out.println("Nombres completos: " + nombresCompletos);


        //ejemplo 7

//        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 1, 2, 3);
//
//        List<Integer> numerosSinDuplicados = numbers.stream()
//                .distinct()
//                .collect(Collectors.toList());
//
//        System.out.println("Números sin duplicados: " + numerosSinDuplicados);


        //ejemplo 8

//        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
//
//        int maximo = numbers.stream()
//                .max(Integer::compare)
//                .orElse(null);
//
//        System.out.println("Elemento máximo: " + maximo);


        //ejemplo 9

//        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
//
//        int minimo = numbers.stream()
//                .min(Integer::compare)
//                .orElse(null);
//
//        System.out.println("Elemento mínimo: " + minimo);


        //ejemplo 10

//        String cadena1 = "Hola";
//        String cadena2 = "Mundo";
//
//        String cadenaUnida = Stream.of(cadena1, cadena2)
//                .collect(Collectors.joining());
//
//        System.out.println("Cadena unida: " + cadenaUnida);


        //ejemplo 11

//        List<String> numerosStr = Arrays.asList("1", "2", "3", "4", "5");
//
//        List<Integer> numeros = numerosStr.stream()
//                .map(Integer::parseInt)
//                .collect(Collectors.toList());
//
//        System.out.println("Números: " + numeros);


        //ejemplo 12

//        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
//
//        int productoPares = numbers.stream()
//                .filter(number -> number % 2 == 0)
//                .mapToInt(number -> number * number)
//                .reduce(1, (a, b) -> a * b);
//
//        System.out.println("Producto de todos los números pares: " + productoPares);


        //ejemplo 13

//        List<String> nombres1 = Arrays.asList("Juan", "Ana", "Pedro");
//        List<String> nombres2 = Arrays.asList("Ana", "María", "Pedro");
//
//        List<String> nombresUnicos = Stream.concat(nombres1.stream(), nombres2.stream())
//                .distinct()
//                .collect(Collectors.toList());
//
//        System.out.println("Nombres únicos: " + nombresUnicos);


        //ejemplo 14

//        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
//
//        int productoImpares = numbers.stream()
//                .filter(number -> number % 2 != 0)
//                .mapToInt(number -> number * number)
//                .reduce(1, (a, b) -> a * b);
//
//        System.out.println("Producto de todos los números impares: " + productoImpares);


        //ejemplo 15

//        List<String> nombres1 = Arrays.asList("Juan", "Ana", "Pedro");
//        List<String> nombres2 = Arrays.asList("Ana", "María", "Pedro");
//
//        List<String> nombresUnicosOrdenados = Stream.concat(nombres1.stream(), nombres2.stream())
//                .distinct()
//                .sorted()
//                .collect(Collectors.toList());
//
//        System.out.println("Nombres únicos ordenados: " + nombresUnicosOrdenados);


        //ejemplo 16

        List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        List<Integer> numerosPares = numeros.stream()
                .filter(numero -> numero % 2 == 0)
                .collect(Collectors.toList());

        System.out.println("Números pares: " + numerosPares);

    }
}