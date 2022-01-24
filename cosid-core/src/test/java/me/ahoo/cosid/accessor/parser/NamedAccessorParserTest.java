/*
 * Copyright [2021-present] [ahoo wang <ahoowang@qq.com> (https://github.com/Ahoo-Wang)].
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *      http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package me.ahoo.cosid.accessor.parser;

import me.ahoo.cosid.accessor.IdDefinition;
import me.ahoo.cosid.annotation.entity.LongIdEntity;
import me.ahoo.cosid.provider.IdGeneratorProvider;

import lombok.SneakyThrows;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.lang.reflect.Field;

/**
 * @author ahoo wang
 */
class NamedAccessorParserTest {

    private static final NamedDefinitionParser NAMED_PARSER = new NamedDefinitionParser("id");

    @SneakyThrows
    @Test
    void parse() {
        Field idField = LongIdEntity.class.getDeclaredField("id");
        IdDefinition idDefinition = NAMED_PARSER.parse(LongIdEntity.class, idField);
        Assertions.assertNotEquals(IdDefinition.NOT_FOUND, idDefinition);
        Assertions.assertEquals(IdGeneratorProvider.SHARE, idDefinition.getGeneratorName());
    }
}
